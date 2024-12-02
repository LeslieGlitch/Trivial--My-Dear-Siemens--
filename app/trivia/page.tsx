"use client";

import React from "react";
import { DefaultPageLayout } from "@/subframe/layouts/DefaultPageLayout";
import { Stepper } from "@/subframe/components/Stepper";
import { Button } from "@/subframe/components/Button";
import { Progress } from "@/subframe/components/Progress";

function CardFormWizard() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-center gap-4 bg-default-background py-12">
        <div className="flex w-full max-w-[576px] flex-col items-start gap-8">
          <div className="flex w-full flex-col items-center">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Trivial, My Dear Siemens!
            </span>
            <span className="text-body font-body text-subtext-color">
              A small trivia game using OpenTriviaDB
            </span>
          </div>
          <Stepper>
            <Stepper.Step
              variant="active"
              firstStep={true}
              stepNumber="1"
              label="Question 1"
            />
            <Stepper.Step variant="default" stepNumber="2" label="Question 2" />
            <Stepper.Step variant="default" stepNumber="3" label="Question 3" />
            <Stepper.Step variant="default" stepNumber="4" label="Question 4" />
            <Stepper.Step lastStep={true} stepNumber="5" label="Question 5" />
          </Stepper>
          <div className="flex w-full flex-col items-center gap-2 px-1 py-1">
            <span className="text-heading-2 font-heading-2 text-default-font">
              Question #
            </span>
            <span className="text-heading-1 font-heading-1 text-default-font">
              What is the answer to this question?
            </span>
          </div>
          <div className="flex w-full flex-col items-start gap-2 px-1 py-1">
            <div className="flex w-full items-center justify-center gap-2 px-1 py-1">
              <Button
                className="h-auto grow shrink-0 basis-0 self-stretch"
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Answer
              </Button>
              <Button
                className="h-auto min-h-[64px] grow shrink-0 basis-0 self-stretch"
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Answer
              </Button>
            </div>
            <div className="flex w-full items-center justify-center gap-2 px-1 py-1">
              <Button
                className="h-auto grow shrink-0 basis-0 self-stretch"
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Answer
              </Button>
              <Button
                className="h-auto min-h-[64px] grow shrink-0 basis-0 self-stretch"
                disabled={false}
                variant="brand-primary"
                size="medium"
                icon={null}
                iconRight={null}
                loading={false}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Answer
              </Button>
            </div>
            <div className="flex w-full flex-col items-center gap-2 px-1 py-1">
              <Progress value={30} />
              <span className="text-body font-body text-default-font">
                Time Remaining
              </span>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default CardFormWizard;
