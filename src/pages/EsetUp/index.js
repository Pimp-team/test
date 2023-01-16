import React from "react";

import { Img, Text, Button, Stack, List, CheckBox } from "components";

const EsetUpPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-end mx-[auto] sm:pt-[15px] md:pt-[22px] pt-[33px] w-[100%]">
        <div className="flex flex-col items-center justify-start max-w-[1280px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <header className="w-[100%]">
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
              <div className="header-row w-[10%] mt-[7px] mb-[6px] sm:w-[100%] sm:my-[3px] sm:mx-[0] sm:px-[0] md:my-[4px] flex-row flex">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end">
                  <Img
                    src="images/img_s1.png"
                    className="flex-shrink-0 max-w-[100%] w-[23%]"
                    alt="S1"
                  />
                  <Text
                    className="flex-grow font-bold sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-gray_900_a2"
                    variant="body1"
                  >
                    Eset Up
                  </Text>
                </div>
                <div className="mobile-menu">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap sm:hidden md:ml-[195px] ml-[284px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%] common-row-list">
                <ul className="flex flex-row items-center justify-center sm:hidden">
                  <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-pink_A400 tracking-ls054 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Home
                    </a>
                  </li>
                  <li className="w-[auto] ml-[30px] sm:ml-[15px] sm:w-[100%] sm:my-[10px] md:ml-[20px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_900 hover:text-pink_A400 tracking-ls054 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      About
                    </a>
                  </li>
                  <li className="w-[auto] ml-[31px] sm:ml-[16px] sm:w-[100%] sm:my-[10px] md:ml-[21px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_900 hover:text-pink_A400 tracking-ls054 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Service
                    </a>
                  </li>
                  <li className="w-[auto] ml-[31px] sm:ml-[16px] sm:w-[100%] sm:my-[10px] md:ml-[21px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_900 hover:text-pink_A400 tracking-ls054 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Price
                    </a>
                  </li>
                  <li className="w-[auto] ml-[31px] sm:ml-[16px] sm:w-[100%] sm:my-[10px] md:ml-[21px]">
                    <a
                      href={"javascript:"}
                      className="cursor-pointer font-normal not-italic text-[18px] text-gray_900 hover:text-pink_A400 tracking-ls054 md:tracking-ls1 sm:tracking-ls1"
                      rel="noreferrer"
                    >
                      Testimonial
                    </a>
                  </li>
                </ul>
              </div>
              <Button
                className="cursor-pointer font-bold sm:hidden min-w-[12%] sm:ml-[136px] md:ml-[176px] ml-[257px] text-[16px] text-center text-pink_A400 tracking-ls01599999964237213 md:tracking-ls11 sm:tracking-ls11 w-[max-content]"
                shape="RoundedBorder5"
                size="lg"
                variant="OutlinePinkA40090"
              >
                Contact
              </Button>
            </div>
          </header>
          <div className="flex flex-col items-center justify-start sm:mt-[26px] md:mt-[34px] mt-[50px] sm:px-[0] w-[100%]">
            <Stack className="h-[660px] relative w-[100%]">
              <Img
                src="images/img_shutterstock13.png"
                className="absolute h-[660px] max-w-[100%] right-[0] sm:w-[100%] w-[55%]"
                alt="shutterstockThirteen"
              />
              <div className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[0] sm:mx-[0] my-[auto] sm:px-[0] rounded-radius4 sm:w-[100%] w-[50%]">
                <Text
                  className="font-montserrat leading-[80.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 sm:tracking-ls11 tracking-ls15 md:tracking-ls2 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  <span className="text-gray_900 text-[64px] font-bold sm:text-[48px] md:text-[48px]">
                    Great software is
                    <br />
                    <br />
                    built with{" "}
                  </span>
                  <span className="text-pink_A400 text-[64px] font-bold sm:text-[48px] md:text-[48px]">
                    amazing <br />
                    developers
                  </span>
                </Text>
                <Text
                  className="font-montserrat font-normal leading-[42.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[83%]"
                  variant="body2"
                >
                  We help build and manage a team of world-class developers to
                  bring your vision to life
                </Text>
                <Button
                  className="cursor-pointer font-bold font-dmsans min-w-[29%] sm:mt-[13px] md:mt-[17px] mt-[25px] text-[20px] text-center text-white_A700 w-[max-content]"
                  shape="RoundedBorder5"
                  size="xl"
                  variant="FillDeeppurple600"
                >
                  Get Started
                </Button>
              </div>
            </Stack>
            <div className="flex flex-col items-center justify-start mt-[110px] sm:mt-[58px] md:mt-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
              <Text
                className="capitalize font-bold text-pink_A401 w-[auto]"
                variant="body2"
              >
                Meet our Clients
              </Text>
              <Text
                className="font-normal leading-[50.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[15px] mt-[23px] sm:mx-[0] not-italic text-center text-gray_900 tracking-ls05 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[61%]"
                as="h4"
                variant="h4"
              >
                This guys are using our service and they're more than happier
                ever.
              </Text>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
                <Img
                  src="images/img_image11.png"
                  className="max-w-[100%] w-[10%]"
                  alt="imageEleven"
                />
                <Img
                  src="images/img_image12.png"
                  className="max-w-[100%] w-[13%]"
                  alt="imageTwelve"
                />
                <Img
                  src="images/img_image13.png"
                  className="max-w-[100%] w-[15%]"
                  alt="imageThirteen"
                />
                <Img
                  src="images/img_image14.png"
                  className="max-w-[100%] w-[15%]"
                  alt="imageFourteen"
                />
                <Img
                  src="images/img_image15.png"
                  className="max-w-[100%] w-[15%]"
                  alt="imageFifteen"
                />
              </div>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[100px] sm:mt-[53px] md:mt-[68px] sm:px-[0] w-[100%]">
              <Stack className="h-[707px] relative sm:w-[100%] w-[50%]">
                <div className="absolute bg-gray_50 bottom-[3%] sm:h-[284px] md:h-[367px] h-[532px] left-[1%] rounded-radius50 sm:w-[283px] md:w-[366px] w-[532px]"></div>
                <Img
                  src="images/img_shutterstock13_707X633.png"
                  className="absolute h-[707px] max-w-[100%] w-[100%]"
                  alt="shutterstockThirteen One"
                />
              </Stack>
              <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                <Text
                  className="leading-[60.00px] md:leading-[normal] sm:leading-[normal] text-gray_900 sm:tracking-ls11 tracking-ls15 md:tracking-ls2 w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  <span className="text-gray_900 text-[48px] font-montserrat font-bold sm:text-[38px] md:text-[44px]">
                    Boost your agencies by choosing{" "}
                  </span>
                  <span className="text-deep_purple_600 text-[48px] font-montserrat font-bold sm:text-[38px] md:text-[44px]">
                    Ninja Developers
                  </span>
                </Text>
                <Text
                  className="font-normal leading-[34.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] not-italic text-gray_900_90 sm:w-[100%] w-[83%]"
                  variant="body2"
                >
                  Create custom landing pages with Shades that convert more
                  visitors than any website, no coding required.
                </Text>
                <div className="flex flex-col justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="checkmark"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_900_90"
                      variant="body2"
                    >
                      Unlimited design possibility
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] w-[100%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="checkmark One"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_900_90"
                      variant="body2"
                    >
                      Completely responsive features
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="checkmark Two"
                    />
                    <Text
                      className="flex-grow font-normal ml-[10px] sm:ml-[5px] md:ml-[6px] not-italic text-gray_900_90"
                      variant="body2"
                    >
                      Easy to customize plugins
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] pt-[10px] sm:pt-[5px] md:pt-[6px] sm:px-[0] sm:w-[100%] w-[97%]">
              <div className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                <Text
                  className="capitalize font-bold text-pink_A401 w-[auto]"
                  variant="body2"
                >
                  our service
                </Text>
                <Text
                  className="font-bold sm:mt-[16px] md:mt-[21px] mt-[31px] text-gray_900 sm:tracking-ls11 tracking-ls15 md:tracking-ls2 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Determine the service you need
                </Text>
              </div>
              <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[26px] md:mt-[34px] mt-[50px] w-[100%]">
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                  <Stack className="bg-gradient  h-[110px] sm:p-[15px] md:p-[20px] p-[30px] relative rounded-radius35 w-[110px] sm:w-[58px] md:w-[75px]">
                    <Img
                      src="images/img_signal.svg"
                      className="absolute h-[50px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[26px] md:w-[34px] w-[50px]"
                      alt="signal"
                    />
                  </Stack>
                  <Text
                    className="font-bold sm:mt-[11px] md:mt-[14px] mt-[21px] text-gray_901 w-[auto]"
                    variant="body2"
                  >
                    <span className="text-black_900 text-[18px] tracking-ls07503158450126648 font-montserrat sm:tracking-ls11 md:tracking-ls11">
                      Developm
                    </span>
                    <span className="text-black_900 text-[18px] font-montserrat">
                      e
                    </span>
                    <span className="text-black_900 text-[18px] tracking-ls07503158450126648 font-montserrat sm:tracking-ls11 md:tracking-ls11">
                      nt
                    </span>
                  </Text>
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[15px] mt-[23px] not-italic text-black_900_75 text-center tracking-ls05002105832099915 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                    variant="body5"
                  >
                    Create a platform with the best and coolest quality from us.
                  </Text>
                </div>
                <List
                  className="sm:gap-[31px] md:gap-[41px] gap-[60px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:w-[100%] w-[48%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Stack className="bg-gradient1  h-[110px] sm:p-[15px] md:p-[19px] p-[29px] relative rounded-radius35 w-[110px] sm:w-[58px] md:w-[75px]">
                      <Img
                        src="images/img_shape1.svg"
                        className="absolute h-[30px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[45%]"
                        alt="ShapeOne"
                      />
                    </Stack>
                    <Text
                      className="font-bold sm:mt-[11px] md:mt-[14px] mt-[21px] text-gray_901 w-[auto]"
                      variant="body2"
                    >
                      <span className="text-black_900 text-[18px] tracking-ls07503158450126648 font-montserrat sm:tracking-ls11 md:tracking-ls11">
                        UI/UX D
                      </span>
                      <span className="text-black_900 text-[18px] font-montserrat">
                        e
                      </span>
                      <span className="text-black_900 text-[18px] tracking-ls07503158450126648 font-montserrat sm:tracking-ls11 md:tracking-ls11">
                        signer
                      </span>
                    </Text>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-black_900_75 text-center tracking-ls05002105832099915 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      variant="body5"
                    >
                      We provide UI/UX Design services, and of course with the
                      best quality
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                    <Stack className="bg-gradient2  h-[110px] md:p-[22px] p-[32px] sm:px-[15px] sm:py-[17px] relative rounded-radius35 w-[110px] sm:w-[58px] md:w-[75px]">
                      <Img
                        src="images/img_l0001.png"
                        className="absolute h-[46px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[24px] md:w-[31px] w-[46px]"
                        alt="L0001"
                      />
                    </Stack>
                    <Text
                      className="font-bold sm:mt-[11px] md:mt-[14px] mt-[21px] text-black_900 w-[auto]"
                      variant="body2"
                    >
                      Motion Graphik
                    </Text>
                    <Text
                      className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[12px] md:mt-[16px] mt-[24px] not-italic text-black_900_75 text-center tracking-ls05002105832099915 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                      variant="body5"
                    >
                      Create a platform with the best and coolest quality from
                      us.
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                  <Stack className="bg-gradient3  h-[110px] md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px] relative rounded-radius35 w-[110px] sm:w-[58px] md:w-[75px]">
                    <Img
                      src="images/img_trophy.svg"
                      className="absolute h-[39px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[20px] md:w-[26px] w-[39px]"
                      alt="trophy"
                    />
                  </Stack>
                  <Text
                    className="font-bold sm:mt-[14px] md:mt-[18px] mt-[27px] text-gray_901 w-[auto]"
                    variant="body2"
                  >
                    Best Award history
                  </Text>
                  <Text
                    className="leading-[28.00px] md:leading-[normal] sm:leading-[normal] md:mt-[10px] mt-[15px] sm:mt-[7px] not-italic text-bluegray_800_90 text-center w-[100%]"
                    variant="body5"
                  >
                    we have placed various awards for our performance
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="mt-[100px] sm:mt-[53px] md:mt-[68px] w-[100%]">
          <div className="flex flex-col items-center justify-start max-w-[1440px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Stack
              className="bg-cover bg-no-repeat h-[311px] sm:p-[15px] md:p-[25px] p-[37px] relative sm:w-[100%] w-[90%]"
              style={{ backgroundImage: "url('images/img_group48095485.svg')" }}
            >
              <Stack className="absolute h-[147px] inset-x-[0] mx-[auto] top-[20%] sm:w-[100%] w-[92%]">
                <Img
                  src="images/img_minimize.svg"
                  className="absolute h-[58px] max-w-[100%] right-[0] rounded-radius10 top-[0] w-[7%]"
                  alt="minimize"
                />
                <div className="absolute bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center justify-between sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[97%]">
                  <Text
                    className="font-bold leading-[55.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-white_A700 sm:tracking-ls11 tracking-ls15 md:tracking-ls2 sm:w-[100%] w-[51%]"
                    as="h3"
                    variant="h3"
                  >
                    Hire the world’s best developers <br />
                    and designers around!
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[17px] p-[25px] sm:w-[100%] w-[23%]"
                    style={{
                      backgroundImage: "url('images/img_group48095483.svg')",
                    }}
                  >
                    <Text
                      className="font-bold mt-[1px] text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls16 w-[auto]"
                      variant="body3"
                    >
                      HIRE DEVELOPERS
                    </Text>
                  </div>
                </div>
              </Stack>
              <Img
                src="images/img_group48095496.svg"
                className="absolute h-[193px] inset-y-[0] max-w-[100%] my-[auto] right-[36%] w-[21%]"
                alt="Group48095496"
              />
            </Stack>
            <div className="flex flex-col items-center justify-start mt-[100px] sm:mt-[53px] md:mt-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
              <Text className="text-gray_900 w-[auto]" as="h2" variant="h2">
                Our Price
              </Text>
              <Text
                className="font-normal leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-center text-gray_900_b2 w-[100%]"
                variant="body2"
              >
                choose the price that suits your needs, we will always give the
                best for you
              </Text>
            </div>
            <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[26px] md:mt-[34px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
              <div className="flex flex-col justify-start sm:mt-[47px] md:mt-[61px] mt-[90px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $50
                  </Text>
                  <Text
                    className="font-normal ml-[4px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    /month
                  </Text>
                </div>
                <Text
                  className="sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Base
                </Text>
                <Text
                  className="font-normal leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] not-italic text-bluegray_400 sm:w-[100%] w-[98%]"
                  variant="body3"
                >
                  For most businesses that want to otpimize web queries
                </Text>
                <div className="flex flex-col justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] w-[100%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Alllimitedlin"
                        label="All limited links"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Ownanalyticsp"
                        label="Own analytics platform"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Chatsupport"
                        label="Chat support"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Optimizehashta"
                        label="Optimize hashtags"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Unlimitedusers"
                        label="Unlimited users"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="w-[100%] mt-[24px] sm:mt-[12px] md:mt-[16px] text-center">
                      <Button className="cursor-pointer font-semibold text-[16px] text-center text-pink_200">
                        Choose plan
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
              <Stack className="bg-deep_purple_600 h-[480px] mb-[13px] sm:mb-[6px] md:mb-[8px] sm:ml-[39px] md:ml-[51px] ml-[75px] sm:pl-[15px] md:pl-[20px] pl-[30px] relative rounded-radius26 shadow-bs w-[35%]">
                <Img
                  src="images/img_group30.svg"
                  className="absolute h-[480px] max-w-[100%] rounded-radius26 w-[36%]"
                  alt="GroupThirty"
                />
                <Button
                  className="absolute cursor-pointer font-semibold min-w-[42%] right-[7%] text-[10px] text-center text-pink_200 top-[4%] tracking-ls08333333134651184 md:tracking-ls1 sm:tracking-ls1 w-[max-content]"
                  shape="RoundedBorder13"
                  size="sm"
                  variant="FillDeeppurple700"
                >
                  MOST POPULAR
                </Button>
                <Button
                  className="absolute bottom-[9%] cursor-pointer font-semibold inset-x-[0] min-w-[80%] mx-[auto] text-[16px] text-center text-white_A700 w-[max-content]"
                  variant="FillPinkA400"
                >
                  Choose plan
                </Button>
                <div className="absolute bottom-[36%] flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="w-[100%]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-white_A700"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Alllimitedlin One"
                        label="All limited links"
                        size="sm"
                        variant="FillWhiteA70063"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-white_A700"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Ownanalyticsp One"
                        label="Own analytics platform"
                        variant="FillWhiteA70063"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-white_A700"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Chatsupport One"
                        label="Chat support"
                        size="sm"
                        variant="FillWhiteA70063"
                      ></CheckBox>
                    </li>
                  </ul>
                </div>
                <CheckBox
                  className="absolute bottom-[30%] font-normal left-[0] not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-white_A700"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="Optimizehashta One"
                  label="Optimize hashtags"
                  size="sm"
                  variant="FillWhiteA70063"
                ></CheckBox>
                <CheckBox
                  className="absolute bottom-[23%] font-normal left-[0] not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-white_A700"
                  inputClassName="h-[20px] mr-[5px] w-[20px]"
                  name="Unlimitedusers One"
                  label="Unlimited users"
                  size="sm"
                  variant="FillWhiteA70063"
                ></CheckBox>
                <div className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center left-[0] sm:mx-[0] sm:px-[0] rounded-radius23 top-[10%] sm:w-[100%] w-[56%]">
                  <Text
                    className="font-bold text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $100
                  </Text>
                  <Text
                    className="font-normal sm:ml-[4px] md:ml-[6px] ml-[9px] not-italic text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    /month
                  </Text>
                </div>
                <div className="absolute flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] rounded-radius26 top-[24%] sm:w-[100%] w-[80%]">
                  <Text
                    className="text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Pro
                  </Text>
                  <Text
                    className="leading-[20.00px] md:leading-[normal] sm:leading-[normal] mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700 w-[100%]"
                    variant="body4"
                  >
                    For most businesses that want to otpimize web queries
                  </Text>
                </div>
              </Stack>
              <div className="flex flex-col justify-start md:ml-[34px] ml-[50px] sm:mt-[47px] md:mt-[61px] mt-[90px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    $200
                  </Text>
                  <Text
                    className="font-normal sm:ml-[3px] md:ml-[4px] ml-[7px] not-italic text-bluegray_400 w-[auto]"
                    variant="body2"
                  >
                    /month
                  </Text>
                </div>
                <Text
                  className="sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_900 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Enterprise
                </Text>
                <Text
                  className="font-normal leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-bluegray_400 w-[100%]"
                  variant="body3"
                >
                  For most businesses that want to otpimize web queries
                </Text>
                <div className="flex flex-col justify-start sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%] common-column-list">
                  <ul className="flex flex-col">
                    <li className="">
                      <CheckBox
                        className="cursor-pointer font-montserrat font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Alllimitedlin Two"
                        label="All limited links"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="w-[100%] mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-montserrat font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Ownanalyticsp Two"
                        label="Own analytics platform"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-montserrat font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Chatsupport Two"
                        label="Chat support"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-montserrat font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Optimizehashta Two"
                        label="Optimize hashtags"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="mt-[10px] sm:mt-[5px] md:mt-[6px]">
                      <CheckBox
                        className="cursor-pointer font-montserrat font-normal not-italic pl-[10px] sm:pl-[5px] md:pl-[6px] text-[16px] text-bluegray_400"
                        inputClassName="h-[20px] mr-[5px] w-[20px]"
                        name="Unlimitedusers Two"
                        label="Unlimited users"
                        size="sm"
                      ></CheckBox>
                    </li>
                    <li className="w-[100%] mt-[24px] sm:mt-[12px] md:mt-[16px] text-center">
                      <Button className="cursor-pointer font-avenir font-black text-[15px] text-center text-pink_200">
                        Choose plan
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] w-[100%]">
              <div className="bg-gray_100 flex flex-col items-center justify-start sm:p-[15px] md:p-[55px] p-[80px] w-[100%]">
                <div className="flex flex-col items-center justify-start mb-[1px] sm:px-[0] w-[100%]">
                  <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                      <Img
                        src="images/img_group48095474.svg"
                        className="max-w-[100%] sm:mt-[35px] md:mt-[45px] mt-[66px] w-[11%]"
                        alt="Group48095474"
                      />
                      <Stack className="h-[302px] relative sm:w-[100%] w-[84%]">
                        <div className="absolute backdrop-opacity-[0.5] bg-black_900_63 blur-[80.00px] bottom-[0] sm:h-[122px] md:h-[158px] h-[229px] inset-x-[0] mx-[auto] rounded-radius71 sm:w-[100%] w-[92%]"></div>
                        <div
                          className="absolute bg-cover bg-no-repeat flex flex-col justify-start p-[10px] sm:p-[5px] md:p-[6px] top-[0] w-[100%]"
                          style={{
                            backgroundImage:
                              "url('images/img_group48095426.svg')",
                          }}
                        >
                          <div className="flex flex-col justify-start sm:mb-[23px] md:mb-[30px] mb-[45px] ml-[13px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                            <Stack className="h-[69px] md:ml-[11px] ml-[16px] sm:ml-[8px] relative w-[14%]">
                              <Img
                                src="images/img_ellipse1132.png"
                                className="absolute bottom-[0] sm:h-[34px] md:h-[44px] h-[63px] rounded-radius50 w-[100%]"
                                alt="Ellipse1132"
                              />
                              <Img
                                src="images/img_ellipse1131.png"
                                className="absolute sm:h-[34px] md:h-[44px] h-[63px] rounded-radius50 top-[0] w-[100%]"
                                alt="Ellipse1131"
                              />
                            </Stack>
                            <div className="flex flex-col justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%] common-column-list">
                              <ul className="flex flex-col">
                                <li className="w-[32%] sm:w-[100%] sm:mx-[0] sm:px-[0] flex-col flex">
                                  <div className="cursor-pointer flex flex-col items-center justify-start">
                                    <Text
                                      className="text-gray_902 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      Jhone Lown
                                    </Text>
                                  </div>
                                </li>
                                <li className="w-[23%] mt-[10px] ml-[1px] sm:mt-[5px] md:mt-[6px] max-w-[100%]">
                                  <Img
                                    src="images/img_frame48095435.svg"
                                    className="cursor-pointer max-w-[100%]"
                                    alt="Frame48095435"
                                  />
                                </li>
                                <li className="w-[auto] mt-[14px] ml-[1px] sm:mt-[7px] md:mt-[9px]">
                                  <a
                                    href={"javascript:"}
                                    className="cursor-pointer font-normal leading-[180.00%] not-italic text-[18px] text-gray_900_91 tracking-ls018 md:tracking-ls11 sm:tracking-ls11"
                                    rel="noreferrer"
                                  >
                                    “after 1 month I consistently do sports in
                                    sprints, finally you lose about 20 kg in
                                    weight”
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Stack>
                    </div>
                    <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                      <Text
                        className="leading-[130.00%] text-gray_902 tracking-ls048 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
                        as="h2"
                        variant="h2"
                      >
                        Testimonials
                        <br />
                        <br />
                        Eset Up Customers
                      </Text>
                      <Text
                        className="font-normal leading-[180.00%] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:mx-[0] not-italic text-gray_900_91 sm:w-[100%] w-[84%]"
                        variant="body1"
                      >
                        What our customers have to say about our service, check
                        below!
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_902 flex flex-col items-center justify-end sm:p-[15px] md:p-[28px] p-[41px] w-[100%]">
                <div className="flex flex-col items-center justify-start sm:mt-[46px] md:mt-[59px] mt-[87px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                  <div className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-normal sm:ml-[158px] md:ml-[205px] ml-[298px] not-italic text-white_A700 tracking-ls05 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Subscribe to get notified about update
                    </Text>
                    <Stack className="h-[141px] sm:ml-[29px] md:ml-[37px] ml-[55px] sm:mt-[12px] md:mt-[15px] mt-[23px] relative sm:w-[100%] w-[86%]">
                      <div className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[21%] sm:w-[100%] w-[51%]">
                        <div className="flex flex-col items-center justify-start w-[100%]">
                          <Text
                            className="font-normal not-italic text-white_A700_90 tracking-ls05 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body3"
                          >
                            By subscribing with your mail, you will accept our
                            privacy policy
                          </Text>
                          <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[34px] md:mt-[44px] mt-[65px] w-[100%]">
                            <div className="bg-white_A700_61 flex flex-col sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius5 sm:w-[100%] w-[69%]">
                              <Text
                                className="font-normal sm:ml-[4px] md:ml-[6px] ml-[9px] mt-[3px] not-italic text-white_A700_a2 w-[auto]"
                                variant="body3"
                              >
                                Enter your email
                              </Text>
                            </div>
                            <div className="bg-deep_purple_600 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 sm:w-[100%] w-[29%]">
                              <Text
                                className="font-medium mb-[1px] text-white_A700_a2 tracking-ls05 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                variant="body2"
                              >
                                Subscribe us
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        src="images/img_group48095496.svg"
                        className="absolute bottom-[1%] h-[128px] max-w-[100%] w-[100%]"
                        alt="Group48095497"
                      />
                    </Stack>
                    <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[102px] mt-[149px] sm:mt-[79px] pr-[1px] w-[100%]">
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                        <Img
                          src="images/img_s1.png"
                          className="flex-shrink-0 max-w-[100%] w-[23%]"
                          alt="S1 One"
                        />
                        <Text
                          className="flex-grow font-bold sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[14px] sm:ml-[7px] md:ml-[9px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-white_A700_a2"
                          variant="body1"
                        >
                          Eset Up
                        </Text>
                      </div>
                      <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls0481 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Home
                        </Text>
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls0481 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          About
                        </Text>
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls0481 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Service
                        </Text>
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls0481 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Price
                        </Text>
                        <Text
                          className="font-normal not-italic text-white_A700 tracking-ls0481 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Testimonial
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EsetUpPage;
