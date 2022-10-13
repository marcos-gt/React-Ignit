import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/CheckBox';
import { Button } from './components/Button';

export function App() {

  return (
    <div className="w-screen h-screen bg-gray-900 flex items-center justify-center text-gray-100 flex-col">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4"> Ignit Lab </Heading>
        <Text size="md" className="text-gray-400 mt-1" >Faça Login e começe a usar!</Text>
      </header>
      <form className="gap-4 flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Endereço de E-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" type="email" placeholder="Digite seu e-mail" />

          </TextInput.Root>
        </label>

      </form>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text size="md" className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input id="password" type="password" placeholder="******" />

          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2 mt-3">
          <Checkbox id="remember" />
          <Text size="md" className="font-semibold">Lembrar-me</Text>
        </label>

        <Button type='submit' className="mt-4">Entrar na plataforma</Button>
      </form>
      <footer className="flex flex-col my-3 items-center ">
        <Text asChild className="underline text-gray-400 hover:text-gray-200">
          <a href='#'>Esqueceu sua senha?</a>
        </Text>
        <Text size="md" asChild   className="underline text-gray-400 hover:text-gray-200">
          <a href="">Não tem uma conta? Cadastre-se</a>
          </Text>
      </footer>
    </div>
  )
}
