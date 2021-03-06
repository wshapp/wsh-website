import React from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";

import { useForm } from "@hooks/useForm";
import { CREATE_POST, GET_POSTS } from "@queries/posts";
import { Button } from "@components/Main/Layout/Button";

const FeedForm: React.FC = () => {
  const createPostCallback = () => {
    createPost();
  };

  const { values, onChange, onSubmit } = useForm(createPostCallback, {
    body: "",
  });

  const [createPost, { error }] = useMutation(CREATE_POST, {
    variables: values,
    update(proxy, result) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any = proxy.readQuery({
        query: GET_POSTS,
      });
      proxy.writeQuery({
        query: GET_POSTS,
        data: {
          ...data,
          getPosts: [result.data.createPost, ...data.getPosts],
        },
      });
      values.body = "";
    },
  });

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <IconContainer>
          <Icon src={"https://picsum.photos/200/200"} loading="lazy" />
        </IconContainer>
        <Content>
          <Field
            name="body"
            role="textbox"
            contentEditable
            onInput={onChange}
            onBlur={onChange}
            values={values.body}
            error={error ? true : false}
          />
          <Toolsbar>
            <Button type="submit">Post</Button>
          </Toolsbar>
        </Content>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 2px 15px;
  transition: opacity 0.4s ease-in-out;
  display: inline-block;
  column-break-inside: avoid;
`;

const Form = styled.form`
  display: flex;
  background-color: ${({ theme }) => theme.colors.layout.darker};
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
  font-weight: 500;
  background: transparent;
  color: ${({ theme }) => theme.colors.text.light};
  transition: all 0.2s;
  width: 100%;
  overflow: hidden;
  min-height: 40px;
  line-height: 1.2;
  word-break: break-word;
  padding: 10px 10px;
  width: calc(100% - 10px * 2);

  &:focus {
    color: ${({ theme }) => theme.colors.text.lightest};
  }

  &[contenteditable]:empty::before {
    content: "Write...";
    color: ${({ theme }) => theme.colors.text.light};
    pointer-events: none;
    user-select: none;
  }
`;

const Toolsbar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default FeedForm;
