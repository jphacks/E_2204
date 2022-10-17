package tech.notchman.controllers

import kotlinx.serialization.Serializable

@Serializable
data class Progress(
    val count: Int, val open_cnt: Int, val progress: Float
)