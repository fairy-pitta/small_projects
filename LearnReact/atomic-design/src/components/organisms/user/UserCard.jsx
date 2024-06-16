import styled from "styled-components";

const SDl = styled.dl`
text-align: left;
dt {
float: left;
}
padding-left: 32px
`;
export const UserCard = (props) => {

    const { user } = props;
    
    return (
        <div>
            <img alt="profile" height={160} width={160}
            src="../../../images/boris-smokrovic-RLLR0oRz16Y-unsplash.jpg" />
            <p>Name</p>
            <SDl>
                <dt>Email</dt>
                <dt>example@gmail.com</dt>

                <dt>Tel</dt>
                <dt>1111111</dt>

                <dt>Company</dt>
                <dt>example pte ltd</dt>

                <dt>Hi</dt>
                <dt>Hello</dt>
            </SDl>
        </div>
    )
}