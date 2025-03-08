import styled from "styled-components";

export const ContentHeader = styled.header`
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
`;
