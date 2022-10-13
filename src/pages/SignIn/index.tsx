import { FormEvent, useState } from "react";
import axios from 'axios'
import { Envelope, Lock } from "phosphor-react";
import { Checkbox } from "@radix-ui/react-checkbox";

import { Button } from "../../components/Button";
import { Heading } from "../../components/Heading";
import { Text } from "../../components/Text";
import { Logo } from "../../components/Logo";
import { TextInput } from "../../components/TextInput";

export function SignIn() {
  const [isUserSignIn, setIsUserSignIn] = useState(false)
  
  async function handleSignIn(event: FormEvent) {
    event.preventDefault()
    await axios.post('/', {
      email: 'thiago@gmail.com',
      password: '1234'
    })
    setIsUserSignIn(true)
  }
  
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
    <header className='flex flex-col items-center'>
      <Logo />
      <Heading size='lg' className='mt-4'>
        Ignite lab
      </Heading>
      <Text size='lg' className='text-gray-400 mt-1'>
        Faça login e comece a usar!
      </Text>
    </header>

    <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
      {isUserSignIn && <Text>Login realizado!</Text>}
      
      <label htmlFor='email' className='flex flex-col gap-3'>
        <Text className='font-semibold'>
          Email
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Envelope />
          </TextInput.Icon>

          <TextInput.Input id='email' type='email' placeholder='Digite seu email'/>
        </TextInput.Root>
      </label>

      <label htmlFor='password' className='flex flex-col gap-3'>
        <Text className='font-semibold'>
          Senha
        </Text>
        <TextInput.Root>
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input id='password' type='password' placeholder='********'/>
        </TextInput.Root>
      </label>

      <label htmlFor='remember-me' className='flex items-center gap-2'>
        <Checkbox id='remember-me'/>

        <Text size='sm' className='text-gray-200'>
          Lembrar de mim
        </Text>
      </label>

      <Button type='submit' className='mt-4'>
        Entrar
      </Button>
    </form>

    <footer className='flex flex-col items-center gap-4 mt-8'>
      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>
          Esqueceu sua senha?
        </a>
      </Text>

      <Text asChild size='sm'>
        <a href="" className='text-gray-400 underline hover:text-gray-200'>
          Não possui conta? Crie uma agora!
        </a>
      </Text>
    </footer>
  </div>
  )
}