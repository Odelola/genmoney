import React from 'react';
import { Typography } from 'antd';

const { Text: AntText } = Typography;

const Text = (text: string) => (
    <AntText>{text}</AntText>
);

export { Text };