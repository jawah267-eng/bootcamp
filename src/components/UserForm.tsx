import { useState, type FormEvent } from 'react';
import InputField from './UI/InputField';

interface UserFormProps {
  onSubmit: (data: { name: string; email: string }) => void;
  onCancel: () => void;
}

function UserForm({ onSubmit, onCancel }: UserFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField name="Name" value={name} onchange={(event) => setName(event.target.value)} />
      <InputField name="Email" value={email} onchange={(event) => setEmail(event.target.value)} />
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default UserForm;
