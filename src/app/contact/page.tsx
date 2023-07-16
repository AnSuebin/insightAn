import InputBox from "@/components/common/InputBox";
import SubmitButton from "@/components/common/SubmitButton";
import TextareaBox from "@/components/common/TextareaBox";
import FullHightMaxWidth from "@/components/layout/FullHightMaxWidth";
import React from "react";

const ContactPage = () => {
  return (
    <FullHightMaxWidth>
      <div className="flex w-full h-screen pt-[120px] pb-14 px-4 box-border">
        <div className="h-full w-1/3 mx-10 flex flex-col justify-end">
          <h4 className="text-8xl font-extrabold text-mainColor mb-7">
            Contact.
          </h4>
          <div className="w-full mb-4">
            <InputBox placeHolder="본인 이메일을 적어주세요" />
            <InputBox placeHolder="제목을 적어주세요" />
            <div className="w-full h-96 mb-10">
              <TextareaBox placeHolder="이메일 내용을 적어주세요" />
            </div>
            <SubmitButton text="제출하기" />
          </div>
        </div>
      </div>
    </FullHightMaxWidth>
  );
};

export default ContactPage;
