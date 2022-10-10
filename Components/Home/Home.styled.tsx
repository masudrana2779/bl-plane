import styled from "styled-components";

export const BlPlanWrap = styled.div`
  padding: 20px 0;
  h4 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 20px;
  }
  .planContent {
    padding: 12px 0 6px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &:last-child {
      border-bottom: 0;
    }
    h3 {
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      color: #000;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #ff8126;
    }
    .packItemWrap {
      /* display: grid;
      gap: 10px;
      grid-template-columns: auto auto auto; */
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      .packItem {
        margin: 2px 0 8px 8px;
        width: auto;
        input[type="radio"] {
          display: none;
          &:checked + .packData {
            background-color: #ff8126;
            color: #fff;
          }
        }
        .packData {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(0, 0, 0, 0.12);
          margin: 0;
          box-shadow: 0 0 6px rgb(0 0 0 / 6%);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }
      }
    }
  }
  .Total {
    .right-sidebar-container {
      .right-sidebar {
      }
    }
  }
`;
