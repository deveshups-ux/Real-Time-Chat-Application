📘 REDUX TOOLKIT – STEPWISE CONCLUSION NOTES
Redux centralized state management library है, जो पूरे app का data store में रखता है।
Store = Single source of truth, सभी slices का data यहीं रहता है।
Slice = Store का logical part जिसमें state + reducers grouped रहते हैं।
State = App का actual data, जैसे authUser, cartItems, products।
Initial State हमेशा define करनी चाहिए, ताकि reducer properly काम करे।
Action = Instruction कि state के साथ क्या करना है, इसमें optional payload होता है।
Payload = Reducer को भेजा गया data, जो state update करने में use होता है।
Reducer = Pure function जो action type check करके state update करता है।
Dispatch = Action को reducer तक भेजने का तरीका।
useSelector = React hook, store से updated state component में access करने के लिए।
Component से dispatch(action) → action object बनता है → reducer state update करता है।
Reducer update होने के बाद store में state save हो जाता है।
UI automatically updated state से render होता है।
Provider = Store को React app में wrap करता है, बिना Provider store inaccessible रहेगा।
Login Flow Example:
dispatch(setAuthUser(data)) → payload reducer तक जाता है → store update → UI show।
Logout Flow Example:
dispatch(logoutUser()) → reducer authUser null करता है → store update → UI refresh।
Reducer Naming Convention: setSomething, addSomething, removeSomething, updateSomething, clearSomething।
Redux Toolkit automatically action creators और payload handle करता है, जिससे boilerplate कम हो जाता है।
Redux Flow Summary: Component → Dispatch → Action → Reducer → Store → UI Render।
Redux use करने से app का data predictable, centralized और globally accessible बन जाता है।
