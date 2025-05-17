import styled from "styled-components";

export const Content = styled.div`
    .initiative-list {
        padding: 12px 0;

        .ant-list-items {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .initiative-item {
                padding: 12px;
                border-radius: 8px;
                background-color: none;
                border: 1px solid var(--border-color)!important;

                .ant-list-item-meta {
                    width: 70%;
                    align-items: center;
                }

                .ant-list-item-meta-title {
                    color: var(--text-color)!important;
                }

                .ant-list-item-meta-description {
                    color: var(--border-color)!important;
                }

                .life-panel {
                    list-style: none;
                    display: flex;
                    width: 30%;
                    gap: 8px;
                    
                    .life-points-input {                   

                        .ant-input-number-group-addon {
                            border-color: var(--border-color);
                            span {
                                color: var(--primary-color);
                            }
                        }

                        .ant-input-number {
                            background-color: transparent;
                            border-color: var(--border-color);
                            input {
                                color: var(--primary-color);
                            }
                        }                    
                        
                    }

                    .remove-player-button {
                        margin-left: 12px;

                        svg {
                            color: var(--primary-color);
                        }

                        &:hover {
                            border-color: var(--primary-color);
                        }
                    
                    }

                    .ant-list-item-action {
                        flex-direction: row;
                    }
                }
            }

            .initiative-item:first-of-type {
                background-color: var(--secondary-color);
                    
            }
        }

    }

    @media (max-width: 600px) {
        .initiative-item {
            gap: 12px;
            display: flex;
            flex-direction: column;
            align-items: end;

            .ant-list-item-meta {
                width: 100% !important;
            }

            .life-panel {
                width: 100% !important;
            }
        }
    }
`;