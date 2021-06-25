import styled from 'styled-components';

export const PageRoom = styled.div`
  header {
    padding: 24px;
    border-bottom: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;

      > img {
        max-height: 50px;
      }

      > div {
        display: flex;
        align-items: center;
        gap: 16px;

        button {
          height: 40px;
        }
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;
  
    .room-title {
      margin: 32px 0 24px;

      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        color: ${props => props.theme.colors.text};
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 9999px;

        padding: 8px 16px;

        font-size: 14px;
        font-weight: 500;
        color: #fff;
      }
    }

    form {
      textarea {
        width: 100%;
        min-height: 130px;

        padding: 16px;
        resize: vertical;

        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
        border: 0;
        border-radius: 8px;

        color: #000;
      }

      .form-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 16px;
        color: ${props => props.theme.colors.text};

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;

            font-size: 14px;
            font-weight: 500;
            color: ${props => props.theme.colors.primary};
          }
        }

        > span {
          font-size: 14px;
          font-weight: 500;

          button {
            background: transparent;
            border: 0;
            text-decoration: underline;
            
            font-size: 14px;
            font-weight: 500;
            color: #855afd;

            cursor: pointer;
          }
        }
      }
    }

    .question-list {
      margin-top: 32px;
    }
  }
`;