import PropTypes from 'prop-types';
import { Title, Section } from './section.styled';

 const Sections = ({ title, children }) => {
    return (
        < Section >
            <Title>{title}</Title>
            {children}
        </Section>
    )
};

Sections.prototype = {
    title: PropTypes.string,
    children: PropTypes.element,
};


export default Sections