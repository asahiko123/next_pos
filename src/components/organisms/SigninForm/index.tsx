import { useForm } from 'react-hook-form'

export type SigninFormData = {
  username: string
  password: string
}

interface SigninFormProps {
  onSignin?: (username: string, password: string) => void
}

const SigninForm = ({ onSignin }: SigninFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>()

  const onSubmit = (data: SigninFormData) => {
    const { username, password } = data

    onSignin && onSignin(username, password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={1}>
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="ユーザー名"
          hasError={!!errors.username}
        />
      </Box>
    </form>
  )
}
