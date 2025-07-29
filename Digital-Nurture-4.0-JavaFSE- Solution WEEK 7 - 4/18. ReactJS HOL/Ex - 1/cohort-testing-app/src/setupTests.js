import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; // Use @wojtekmaj/enzyme-adapter-react-17 for React 17+

configure({ adapter: new Adapter() });