import DefaultLayout from "@/component/layout/DefaultLayout";
import { authenticationApi } from "@/utils/authentication";


export default function HomePage() {
    function logToken() {
        console.log(authenticationApi.getToken());
    }

    return (
        <DefaultLayout>
            <div>home page</div>
            <button onClick={() => authenticationApi.setToken('abc')}>login</button>
            <button onClick={() => logToken()}>log token</button>
            <button onClick={() => authenticationApi.resetToken()}>logout</button>
        </DefaultLayout>
    )
}