
import FunctionalStateUpdate from './component/FunctionalStateUpdate'
import StringState from './component/StringState'
import BooleanState from './component/BooleanState'
import ObjectState from './component/ObjectState'
import EventHandlingOnClick from './component/EventHandlingOnClick'
import OnChangeEvent from './component/OnChangeEvent'
import OnSubmitForm from "./component/onSubmitForm"
import ConditionalRendering from "./component/ConditionalRendering"
import ConditionalRenderingWithTernary from "./component/ConditionalRenderingWithTernary"
import RenderingList from "./component/RenderingList"
import RenderingListWithKey from "./component/RenderingListWithKey"
import CompleteList from "./component/CompleteList"
import ArrayObject from "./component/ArrayObject"
import ConditionalRenderingWithAnd from './component/ConditionalRenderingWithAnd'
import UseEffectHook from './component/UseEffectHook'
import UseEffectWithState from './component/useEffectWithState'
function App() {

  return (
    <>

      <FunctionalStateUpdate />
      <StringState />
      <BooleanState />
      <ObjectState />
      <ArrayObject />
      <EventHandlingOnClick />
      <OnChangeEvent />
      <OnSubmitForm />
      <ConditionalRendering />
      <ConditionalRenderingWithTernary />
      <ConditionalRenderingWithAnd />
      <RenderingList />
      <RenderingListWithKey />
      <CompleteList />
      <UseEffectHook/>
      <UseEffectWithState/>
    </>
  )
}

export default App
