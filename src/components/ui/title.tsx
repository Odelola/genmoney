import { Typography } from 'antd';
import { TitleProps } from 'antd/es/typography/Title';

const { Title: AntTitle } = Typography;

// interface TitleProps extends TypographyProps {
//     children: ReactNode
// }
function Title({ children, ...props }: TitleProps) {
    return (
        <AntTitle {...props}>
            {children}
        </AntTitle>
    );

}

export { Title };