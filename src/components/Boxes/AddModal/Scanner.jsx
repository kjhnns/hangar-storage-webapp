import React from 'react'
import PropTypes from 'prop-types'
import Quagga from 'quagga'
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from '@emotion/styled'

const VideoViewport = styled.div`
  position: relative;

  video {
    width: 100%;
    object-fit: cover;
  }

  canvas {
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    video {
      width: 80%;
      margin-left: 10%;
    }

    canvas {
      width: 80%;
      margin-left: 10%;
    }
  }
`

const Scanner = class Scanner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prevScanResult: null,
    }
  }

  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 480,
            facingMode: 'environment', // or user
          },
        },
        locator: false,
        numOfWorkers: 2,
        decoder: {
          readers: ['code_128_reader'],
        },
      },
      () => {
        Quagga.start()
      }
    )

    // const canvas = document.getElementsByClassName('drawingBuffer')[0]
    // const ctx = canvas.getContext('2d')
    // ctx.fillStyle = '#FF0000'
    // ctx.fillRect(0, 0, 150, 75)

    Quagga.onDetected(this.onDetected)
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected)
    Quagga.stop()
  }

  onDetected = result => {
    const { code } = result.codeResult
    // Increase accuracy
    if (this.state.prevScanResult === code) {
      this.props.onDetected(code)
      Quagga.stop()
    } else {
      this.setState({ prevScanResult: code })
    }
  }

  render() {
    return (
      <>
        <VideoViewport id="interactive" className="viewport" />
      </>
    )
  }
}

Scanner.propTypes = {
  onDetected: PropTypes.func.isRequired,
}

export { Scanner }
