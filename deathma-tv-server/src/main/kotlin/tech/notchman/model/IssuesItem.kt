package tech.notchman.model

import com.fasterxml.jackson.annotation.JsonIgnoreProperties

@JsonIgnoreProperties(ignoreUnknown = true)
data class IssuesItem(
    val active_lock_reason: String = "",
    val author_association: String = "",
    val body: String = "",
    val comments: Int = 0,
    val comments_url: String = "",
    val created_at: String = "",
    val events_url: String = "",
    val html_url: String = "",
    val id: Int = 0,
    val labels_url: String = "",
    val locked: Boolean = false,
    val node_id: String = "",
    val number: Int = 0,
    val repository_url: String = "",
    val state: String = "",
    val title: String = "",
    val updated_at: String = "",
    val url: String = "",
)