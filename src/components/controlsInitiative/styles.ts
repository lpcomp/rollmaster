import styled from "styled-components";

export const Content = styled.div`
    .initiative-controls {
      padding: 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        color: var(--text-color);
        padding-left: 10%;
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
`;