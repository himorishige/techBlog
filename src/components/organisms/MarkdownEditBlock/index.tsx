import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Margin } from 'src/styles/util';
import { Button } from 'src/components/atoms';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faBan, faUpload } from '@fortawesome/free-solid-svg-icons';

import { StyledMarkdown as _StyledMarkdown, components } from 'src/styles/markdownStyle';

type Props = {
  title: string;
  inputTitleHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  markdown: string;
  inputHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  addHandler?: (isPublish: boolean) => Promise<void>;
  cancelHandler: () => void;
  updateHandler?: () => Promise<void>;
  disabled: boolean;
  isEdit: boolean;
};

const MarkdownEditBlock: React.VFC<Props> = (props) => {
  const {
    title,
    inputTitleHandler,
    markdown,
    inputHandler,
    addHandler,
    updateHandler,
    cancelHandler,
    disabled,
    isEdit,
  } = props;

  return (
    <>
      <StyledLabel>タイトル</StyledLabel>
      <StyledInput
        type="text"
        placeholder="タイトルを入力してください。"
        value={title}
        onChange={inputTitleHandler}
      />
      <StyledWrapper>
        <StyledTextAreaWrapper>
          <StyledLabel>入力欄</StyledLabel>
          <StyledTextArea
            value={markdown}
            onChange={inputHandler}
            placeholder="Markdown記法で入力ができます。"
          />
        </StyledTextAreaWrapper>
        <StyledMarkdownWrapper>
          <StyledLabel>プレビュー</StyledLabel>
          <StyledMarkdown>
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={components}
              children={markdown}
              className="markdown-body"
            />
          </StyledMarkdown>
        </StyledMarkdownWrapper>
      </StyledWrapper>
      {isEdit ? (
        <StyledControlArea>
          <Margin right="1rem">
            <Button
              data-testid="detail-editbutton"
              onClick={updateHandler}
              disabled={disabled}
              borderColor="slategray"
              mainColor="white"
              bgColor="slategray"
            >
              <FontAwesomeIcon icon={faPlusSquare} /> 保存する
            </Button>
          </Margin>
          <Button
            data-testid="detail-deletebutton"
            borderColor="gray"
            mainColor="gray"
            onClick={cancelHandler}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={faBan} /> 戻る
          </Button>
        </StyledControlArea>
      ) : (
        addHandler && (
          <StyledControlArea>
            <Margin right="1rem">
              <Button
                data-testid="detail-editbutton"
                onClick={() => addHandler(true)}
                disabled={disabled}
                borderColor="green"
                mainColor="white"
                bgColor="green"
              >
                <FontAwesomeIcon icon={faUpload} /> 公開する
              </Button>
            </Margin>
            <Margin right="1rem">
              <Button
                data-testid="detail-editbutton"
                onClick={() => addHandler(false)}
                disabled={disabled}
                borderColor="slategray"
                mainColor="white"
                bgColor="slategray"
              >
                <FontAwesomeIcon icon={faPlusSquare} /> 下書き保存
              </Button>
            </Margin>
            <Button
              data-testid="detail-deletebutton"
              borderColor="gray"
              mainColor="gray"
              onClick={cancelHandler}
              disabled={disabled}
            >
              <FontAwesomeIcon icon={faBan} /> キャンセル
            </Button>
          </StyledControlArea>
        )
      )}
    </>
  );
};

export default MarkdownEditBlock;

const StyledControlArea = styled.div`
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StyledLabel = styled.div`
  font-size: 1.25rem;
  width: 50%;
`;

const StyledInput = styled.input`
  padding: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  border: 1px solid var(--primary-color);
  font-size: 1rem;
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

const StyledTextAreaWrapper = styled.div`
  width: 100%;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 80vh;
  border: 1px solid var(--primary-color);
  resize: none;
  overflow-y: scroll;
  padding: 1rem;
  font-size: 1rem;
`;

const StyledMarkdownWrapper = styled.div`
  width: 100%;
`;

const StyledMarkdown = styled(_StyledMarkdown)`
  border: 1px solid var(--primary-color);
  height: 80vh;
  padding: 1rem;
`;
