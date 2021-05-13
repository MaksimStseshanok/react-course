import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Menu.css';

export default function Menu() {
  const [visible, setVisible] = useState(false);
  return (
    <ul>
      <li>
        <Link to="/hoc">HOC</Link>
      </li>
      <li>
        <Link to="/renderProp">renderProp</Link>
      </li>
      <li>
        <span
          onClick={() => setVisible(!visible)}
          style={{ cursor: 'pointer' }}
        >
          Hooks
        </span>
        <ul className={visible ? 'submenu open' : 'submenu'}>
          <li>
            <Link to="/customHook">Custom Hook</Link>
          </li>
          <li>
            <Link to="/useContext">Context</Link>
          </li>
          <li>
            <Link to="/useState-useEffect">useState + useEffect</Link>
          </li>
          <li>
            <Link to="/useCallback-useMemo">useCallback + useMemo</Link>
          </li>
          <li>
            <Link to="/useReducer">Reducer</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
}
