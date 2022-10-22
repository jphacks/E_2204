package tech.notchman.infra

import com.fasterxml.jackson.databind.ObjectMapper
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import java.io.IOException

class EmotionApiClient {
    companion object {
        private const val BASE_URL =
            "https://deathmatv-linux-function-app.azurewebsites.net/api/AnalyseMultiSentiment?code=O-5lky3mN-aT654ov8lfrc6R9NZSRXE20WMEdvq16RxMAzFuVOJI7Q==";
    }

    private val JSON_MEDIA = "application/json; charset=utf-8".toMediaType()

    private val objectMapper: ObjectMapper = ObjectMapper()
    private val client = OkHttpClient.Builder().build()

    fun getEmotions(text: String): String {
//        val sendDataJson = "{\"text\":\"${text}\"}"
        val sendDataJson = "{\"text\":\"aaa\"}"
        val request = Request.Builder().url(BASE_URL).post(sendDataJson.toRequestBody(JSON_MEDIA)).build()
        client.newCall(request).execute().use { response ->
            if (!response.isSuccessful) {
                //エラーログを確認
                throw IOException("Unexpected code $response")
            }
            val responseString = response.body?.string().orEmpty()

            println(responseString)

//            val emotionsResponse = objectMapper.readValue<EmotionsResponse>(responseString)

            return responseString
        }

    }
}
