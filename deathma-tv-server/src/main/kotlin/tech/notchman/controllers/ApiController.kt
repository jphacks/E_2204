package tech.notchman.controllers

import tech.notchman.infra.*
import java.util.*

class ApiController(private val apiClient: ApiClient) {
    private val channelDao: ChannelDao = jdbi.onDemand(ChannelDao::class.java)
    private val awsClient = AwsClient()
    fun getProgress(): Progress {
        val issues = apiClient.getIssues()
        val len = issues.size
        var count = 0
        for (issue in issues) {
            print(issue)
            if (issue.state != "open") {
                count += 1
            }
        }
        return Progress(progress = count.toFloat() / len.toFloat(), count = len, open_cnt = count)
    }

    fun getChannelInfo(id: String): Channel {
        val count = channelDao.checkRecord(id)
        //recordが存在しない時
        if (count != 0) {
            return channelDao.getRecord(id)
        } else {
            val response = awsClient.getLiveUrl(id)
            val uuid = UUID.randomUUID().toString()
            channelDao.makeRecord(uuid, id, response.secretKey, response.streamServerUrl, response.playBackUrl)
            return Channel(id, response.streamServerUrl, response.playBackUrl, response.secretKey)
        }

    }
}

