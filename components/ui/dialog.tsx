"use client";
import { activitiesData } from "@/lib/types/Activities";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface dialogProps {
  judgesData: activitiesData["judgesData"];
}

const dialog : React.FC<dialogProps> = ({ judgesData }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Read More ...</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {judgesData.map((judge, index) => {
            return (
              <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal" key={index}>
                <h1>{judge.name}</h1>
                <p>{judge.description}</p>
                <p>{judge.achievements}</p>
              </Dialog.Description>
            );
          })}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default dialog;
