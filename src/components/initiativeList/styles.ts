import styled from "styled-components";

export const Content = styled.div`
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
`;