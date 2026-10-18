import React from "react";
import UserForm from "../components/UserForm";
import InputField from "../components/UI/InputField";
import Login from "../components/login";
interface HeaderProps {
  firstlink: string;
  secondlink: string;
}

const Header = ({firstlink , secondlink}: HeaderProps)=>{
 return(
 <header>
   <h1>{firstlink}</h1>
   <p>{secondlink}</p>
 </header>
)
}
const Main =({children}:{children: React.ReactNode})=>{
  return(
    <main>
      <div>test</div>
      {children}
      <h1>main</h1>
    </main>
  )
}

const Home = () => {
  return (
    <>
    <div>jawa</div>
<Header firstlink="firstlink" secondlink="secondlink" />
<Main>
  <h1>first</h1>
  <h2>hello</h2>
</Main>
<UserForm onSubmit={() => console.log('submitted')} onCancel={() => console.log('cancelled')} />
  <InputField name="Name" value="John Doe" onchange={() => {}} />
  <Login />
    </>

  )
}

export default Home
