import {attachPropertiesToComponent} from '@hanwenbo/ui-mobile/es/utils/attach-properties-to-component'
import MyRewards from './myRewards'
import ClaimRewards from './claimRewards'
import CurrentReward from './currentReward'
import Redeem from "./redeem"

export default attachPropertiesToComponent(MyRewards, {
  ClaimRewards: ClaimRewards,
  CurrentReward: CurrentReward,
  Redeem: Redeem,
})
