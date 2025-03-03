import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    --background-color: #212121;
    --text-color: #fbfbfb;
    --primary-color: #23a79a;
    --primary-color-dark: #20978b;
    --secondary-color: #373737;
    --border-color: #7f7f7f;
    --error-color: #f54336;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {    
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    background: var(--background-color);
  }

  body, .ant-typography, .ant-btn, .ant-input, .ant-select, .ant-layout, .ant-breadcrumb, .ant-list, .ant-empty {
    font-family: "Chakra Petch", serif!important;
  }

  .content-initiative {
    height: 100vh;
    background: var(--background-color)!important;
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
    max-width: 980px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    width: 100%;

    .initiative-controls {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;

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

  .primary-button {
    background: var(--primary-color);

    &:hover {
      background: var(--primary-color-dark)!important;
      border-color: var(--border-color);
    }
  }

  .ant-empty-normal .ant-empty-description {
    color: var(--text-color);
  }

  .add-player-drawer {
    background-color: var(--background-color)!important;

    .ant-drawer-header {
      border-bottom: 1px solid var(--border-color);

      button {
        color: var(--primary-color);

        &:hover {
          color: var(--primary-color-dark);
        }
      }

      .ant-drawer-title {
        color: var(--text-color);
      }
    }

    .ant-drawer-body {
      display: flex;
      flex-direction: column;
      gap: 16px;

      input {
        background: transparent;
        border-color: var(--border-color);
        color: var(--border-color);

        &::placeholder {
          color: inherit;
        }

        &:hover {
          border-color: var(--primary-color-dark);
        }
      }
    }
  }

  @media (max-width: 480px) {

    .initiative-controls {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;

      aside {
        flex-direction: inherit;
        align-items: inherit!important;
        gap: inherit!important;

        h3 {
          text-align: center;
        }
      }
    }

  }

`;