import styled from "styled-components";

interface props {
    name: string;
    email: string;
}

function home({ name, email }: props) {
    return (
        <>
        <h1>Ini Halaman Home</h1>
        </>
    )
}

export default home;