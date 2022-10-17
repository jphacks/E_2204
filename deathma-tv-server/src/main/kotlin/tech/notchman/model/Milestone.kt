package tech.notchman.model

data class Milestone(
    val closed_at: String = "",
    val closed_issues: Int = 0,
    val created_at: String = "",
    val creator: Creator,
    val description: String = "",
    val due_on: String = "",
    val html_url: String = "",
    val id: Int = 0,
    val labels_url: String = "",
    val node_id: String = "",
    val number: Int = 0,
    val open_issues: Int = 0,
    val state: String = "",
    val title: String = "",
    val updated_at: String = "",
    val url: String = ""
)