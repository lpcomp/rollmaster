import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    --background-color: #212121;
    --text-color: #fbfbfb;
    --primary-color: #23a79a;
    --primary-color-dark: #20978b;
    --secondary-color: #373737;
    --border-color: #7f7f7f;
    --error-color: #f54336;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: var(--background-color);
  }

  body, .ant-typography, .ant-btn, .ant-input, .ant-select, .ant-layout, .ant-breadcrumb, .ant-list, .ant-empty {
    font-family: "Chakra Petch", serif!important;
  }

  header, main, footer {
    background: var(--background-color)!important;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--border-color);

    img {
      width: 48px;
    }

    h3 {
      color: var(--text-color);
    }
  }

  main {

    .initiative-controls {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;

      button {
        background: var(--primary-color);
      }

      button:hover {
        background: var(--primary-color-dark)!important;
        border-color: var(--border-color);
      }

      aside {
        display: inherit;
        align-items: center;
        gap: 12px;

        h3 {
          color: var(--text-color);
        }
      }
    }

    .initiative-list {
      padding: 12px 0;
      ul {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .initiative-item {
          padding: 12px;
          border-radius: 8px;
          background-color: none;
          border: 1px solid var(--border-color)!important;

          .ant-list-item-meta-title {
            color: var(--text-color)!important;
          }

          .ant-list-item-meta-description {
            color: var(--border-color)!important;
          }

          .remove-player-button {
            svg {
              color: var(--primary-color);
            }

            &:hover {
              border-color: var(--primary-color);
            }
            
          }
        }

        .initiative-item:first-of-type {
          background-color: var(--secondary-color);
                
        }
      }

    }
  }

  .ant-empty-normal .ant-empty-description {
    color: var(--text-color);
  }

  

`;