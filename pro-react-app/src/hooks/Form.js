import useInput from './hook';

const Form = () => {
  const { value, onChange, onBlur, error } = useInput('Hello', true);
  return (
    <form>
      <input
        style={{ marginRight: '15px' }}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};

export default Form;
