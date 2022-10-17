package tech.notchman.infra

import software.amazon.awssdk.regions.Region
import software.amazon.awssdk.services.ivs.IvsClient
import software.amazon.awssdk.services.ivs.model.ChannelLatencyMode
import software.amazon.awssdk.services.ivs.model.CreateChannelRequest

data class Props(
    val secretKey: String,
    val streamServerUrl: String,
    val playBackUrl: String
)

class AwsClient {
    fun getLiveUrl(clientId: String): Props {
        val createChannelRequest = CreateChannelRequest.builder()
            .authorized(false)
            .latencyMode(ChannelLatencyMode.LOW)
            .name(clientId)
            .recordingConfigurationArn("arn:aws:ivs:ap-northeast-1:861540815413:recording-configuration/2C9fm9vlzyP0")
            .build()
        val region: Region = Region.AP_NORTHEAST_1
        val ivs = IvsClient.builder().region(region).build()
        val createChannelResponse = ivs.createChannel(createChannelRequest)
        val secret = createChannelResponse.streamKey().value()
        val streamServerUrl = "rtmps://" + createChannelResponse.channel().ingestEndpoint() + ":443/app/"
        val playBackUrl = createChannelResponse.channel().playbackUrl()

        return Props(secretKey = secret, streamServerUrl = streamServerUrl, playBackUrl = playBackUrl)
    }
}
