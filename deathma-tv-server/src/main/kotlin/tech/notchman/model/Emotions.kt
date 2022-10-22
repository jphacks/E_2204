package tech.notchman.model

import kotlinx.serialization.Serializable

@Serializable
class Emotions(
    val joy: Double,
    val sadness: Double,
    val anticipation: Double,
    val surprise: Double,
    val anger: Double,
    val fear: Double,
    val disgust: Double,
    val trust: Double,
)
