import useStore from "../store"

export default function Cookies() {

    const myCookies = useStore(state => state.cookies)
    
    return (<div>
        <h3>{myCookies}</h3>
    </div>)
}