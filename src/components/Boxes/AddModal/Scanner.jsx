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
`

const Scanner = class Scanner extends React.Component {
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
        locator: {
          patchSize: 'medium',
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ['ean_reader'],
          debug: {
            drawBoundingBox: true,
            showFrequency: false,
            drawScanline: true,
            showPattern: false,
          },
        },
        locate: true,
      },
      () => {
        Quagga.start()
      }
    )
    Quagga.onDetected(this.onDetected)
  }

  componentWillUnmount() {
    Quagga.offDetected(this.onDetected)
    Quagga.stop()
  }

  onDetected = result => {
    const { code } = result.codeResult
    this.props.onDetected(code)
    Quagga.stop()
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
