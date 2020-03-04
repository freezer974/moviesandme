import React from 'react'
import { Animated, Dimensions, Easing } from 'react-native'

class EnlargeShrink extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            viewSize: new Animated.Value(this._getSize())
        }
    }

    _getSize () {
        if (this.props.shouldEnlarge) {
            return 80
        }
        return 40
    }

    componentDidUpdate () {
        Animated.parallel([
            Animated.spring(
                this.state.viewSize,
                {
                    toValue: this._getSize(),
                    seppd: 4,
                    bounciness: 20
                }

            ),
            Animated.timing(
                this.state.viewSize,
                {
                    toValue: this._getSize(),
                    duration: 1000,
                    easing: Easing.elastic(2)
                }

            )
        ]).start()
    }

    render () {
        return (
            <Animated.View
                style={{ width: this.state.viewSize, height: this.state.viewSize }}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default EnlargeShrink

