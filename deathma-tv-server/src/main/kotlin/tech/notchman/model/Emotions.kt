package tech.notchman.model

import kotlinx.serialization.Serializable

@Serializable
class Emotions(
    val joy: Float,
    val sadness: Float,
    val anticipation: Float,
    val surprise: Float,
    val anger: Float,
    val fear: Float,
    val disgust: Float,
    val trust: Float,
)
