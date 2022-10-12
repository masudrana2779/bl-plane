import styled from "styled-components";

export const BlPlanWrap = styled.div`
  padding: 0px 0 200px;
  position: relative;

  h4 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 20px;
    margin: 0 -1.5rem;
    background-color: #ff8126;
    color: #fff;
    font-weight: 700;
    padding: 25px;
  }
  .planContent {
    padding: 12px 0 6px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &:last-child {
      border-bottom: 0;
    }
    h3 {
      font-size: 18px;
      line-height: 20px;
      font-weight: 900;
      color: #000;
      margin-bottom: 0;
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 700;
      color: #ff8126;
      margin-bottom: 0;
      small {
        margin-bottom: 5px;
        display: block;
        font-weight: 400;
        color: #000;
      }
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
            font-weight: 700;
          }
        }
        .packData {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          font-size: 11px;
          font-weight: 600;
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
    &.Internet {
      p {
        color: #86c933;
      }
      .packItemWrap {
        .packItem {
          input[type="radio"] {
            &:checked + .packData {
              background-color: #86c933;
            }
          }
        }
      }
    }
    &.Minutes {
      p {
        color: #4abac3;
      }
      .packItemWrap {
        .packItem {
          input[type="radio"] {
            &:checked + .packData {
              background-color: #4abac3;
            }
          }
        }
      }
    }
    &.SMS {
      p {
        color: #c34ab7;
      }
      .packItemWrap {
        .packItem {
          input[type="radio"] {
            &:checked + .packData {
              background-color: #c34ab7;
            }
          }
        }
      }
    }
  }
  .Total {
    background: #f5f5f5;
    width: 100%;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    right: 0;
    .right-sidebar-container {
      padding: 18px 12px 16px 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: flex-start;
      width: 100%;
      margin: auto;
      .right-sidebar {
        width: 28%;
        padding-top: 6px;
        .myob_bonus_num {
          font-size: 27px;
          line-height: 20px;
          font-weight: 700;
          font-style: italic;
          color: #000;
          margin-bottom: 2px;
          .myob_bonus_text {
            font-size: 14px;
            line-height: 16px;
            padding: 3px 0 0 0;
            font-weight: 500;
            display: block;
            margin: 0;
            color: #000;
          }
        }
      }
      .sidebar-purchage {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        width: 72%;
        justify-content: space-between;
        align-items: center;
        #myob_bttom_stky_left {
          width: 65%;

          .myob_sidebar {
            p {
              padding: 0;
              font-weight: 500;
              margin-bottom: 0;
              text-align: left;
              font-size: 17px;
              line-height: 21px;
              padding: 0;
              font-weight: 500;
              &.flxpln-sml-terms {
                font-size: 13px;
                line-height: 20px;
                color: #767676;
                padding-top: 3px;
              }
              &.purchase_title {
                font-size: 12px;
                line-height: 20px;
                color: #767676;
                font-weight: 400;
                display: flex;
                flex-wrap: wrap;
                justify-content: flex-start;
                span {
                  &:first-child {
                    margin-left: 0;
                  }
                  font-size: 11px;
                  line-height: 20px;
                  padding-bottom: 0;
                  font-weight: 500;
                  color: #767676;
                  position: relative;
                  display: flex;
                  align-items: center;
                  &:after {
                    content: "|";
                    margin: 0 5px;
                  }
                }
              }
            }
          }
        }
        .btn {
          display: inline-block;
          font-weight: 400;
          color: #212529;
          text-align: center;
          vertical-align: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          background-color: transparent;
          border: 1px solid transparent;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          line-height: 1.5;
          border-radius: 0.25rem;
          transition: color 0.15s ease-in-out,
            background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .btn-flexiplan,
        .btn-flexiplan-default {
          font-family: Noto Sans Bengali, Telenor, Helvetica Neue, Helvetica,
            Arial, sans-serif, Source Sans Pro;
          background: #ff8126;
        }
        .btn-flexiplan {
          border: 0;
        }
        .btn-flexiplan {
          color: #fff !important;
          font-size: 16px !important;
          height: 40px !important;
          line-height: 40px !important;
          padding: 0 24px !important;
          margin: 0;
        }
        .btn:not(:disabled):not(.disabled) {
          cursor: pointer;
        }
      }
    }
  }
`;
