import { PredictionRequest } from '../../utils/messages'
import { _HTMLVideoElement as Video } from '../../utils/types'
import { Filter } from './Filter'
import { prepareUrl } from '../../utils/prepareUrl'

export type IVideoFilter = {
  analyzeVideo: (video: Video) => void
}

export class VideoFilter extends Filter implements IVideoFilter {
  public analyzeVideo (video: Video): void {
    const url = prepareUrl(video.poster)

    if (video._isChecked === undefined && typeof url === 'string') {
      video._isChecked = true
      this.hideVideo(video)
      this._analyzeVideo(video).then(() => {}, () => {})
    }
  }

  private async _analyzeVideo (video: Video): Promise<void> {
    try {
      const posterResult = await this._checkPoster(video.poster)

      if (posterResult) {
        this.blockedItems++
        return
      }

      this.showVideo(video)
    } catch {
      this.showVideo(video)
    }
  }

  private hideVideo (video: Video): void {
    video.style.visibility = 'hidden'
    video.pause()
  }

  private showVideo (video: Video): void {
    video.style.visibility = 'visible'
    video.play().then(() => {}, () => {})
  }

  private async _checkPoster (url: string): Promise<boolean> {
    this.logger.log(`Analyze video ${url}`)
    const request = new PredictionRequest(url)

    return await this.requestToAnalyzeImage(request)
  }
}
