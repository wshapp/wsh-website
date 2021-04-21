import React from "react";
import styled from "styled-components";
import { useMutation } from '@apollo/react-hooks';

import { useForm } from "@hooks/useForm";
import { CREATE_POST, GET_POSTS } from '@queries/posts';
import { Button } from "./layout/Buttons";


const PostForm: React.FC = () => {

    const createPostCallback = () => {
        createPost();
    }

    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: ''
    });

    const [createPost, { error }] = useMutation(CREATE_POST, {
        variables: values,
        update(proxy, result) {
            const data: any = proxy.readQuery({
                query: GET_POSTS
            });
            data.getPosts = [result.data.createPost, ...data.getPosts];
            proxy.writeQuery({ query: GET_POSTS, data });
            values.body = '';
        }
    });

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <IconContainer>
                    <Icon src={`https://picsum.photos/200/200`} loading="lazy" />
                </IconContainer>
                <Content>
                    <Field
                        placeholder="Write..."
                        name="body"
                        role="textbox"
                        contentEditable
                        value={values.body}
                        onInput={onChange}
                        onBlur={onChange}
                        error={error ? true : false}
                    />
                    <Toolsbar>
                        <Button type="submit">Send</Button>
                    </Toolsbar>
                </Content>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 15px * 2);
	margin: 0 2px 15px;
	padding: 15px;
	transition: opacity .4s ease-in-out;
    display: inline-block;
    column-break-inside: avoid;
`;

const Form = styled.form`
    display: flex;
    background-color: ${props => props.theme.colors.layout.darker};
    border-radius: 10px;
	padding: 15px;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: center;
    user-select: none;
    pointer-events: none;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Field = styled.span`
    resize: none;
    border: none;
    outline: none;
    border-radius: 0;
    margin-left: 10px;
    padding: 10px 0;
    font-weight: 500;
    background: transparent;
    color: ${props => props.theme.colors.text.lightest};
    transition: all 0.2s;
    width: 100%;
    overflow: hidden;
    min-height: 40px;
    line-height: 20px;
/* 
    &:focus {
        color: ${props => props.theme.colors.text.lightest};
    } */

    &[contenteditable]:empty::before {
        content: "Placeholder still possible";
        color: ${props => props.theme.colors.text.light};
    }
`;

const Toolsbar = styled.div`
    display: flex;
    justify-content: flex-end;
`

export default PostForm;