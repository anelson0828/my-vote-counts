import React from 'react';
import { useForm } from 'react-hook-form';

const TextInputField = ({ name, label, formRef }) => (
  <div className="field" name={name}>
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <input className="input" type="text" ref={formRef} name={name} />
  </div>
);

const RadioButtons = ({ name, label, formRef, value1, value2 }) => (
  <div className="field" name={name}>
    <label className="label" htmlFor={name}>
      {label}
    </label>
    <label className="radio">
      <input
        type="radio"
        name={name}
        id="1"
        value={value1}
        ref={formRef({ required: true })}
      />
      {value1}
    </label>
    <label className="radio" style={{ paddingLeft: '10px' }}>
      <input
        type="radio"
        name={name}
        id="2"
        value={value2}
        ref={formRef({ required: true })}
      />
      {value2}
    </label>
  </div>
);

const YesNoButtons = ({ name, label, formRef }) => (
  <RadioButtons
    value1="Yes"
    value2="No"
    name={name}
    label={label}
    formRef={formRef}
  />
);

const Checklist = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  const values = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <YesNoButtons
        name="registered"
        label="Am I registered?"
        formRef={register}
      />
      {values.registered === 'No' && (
        <div>
          Please visit{' '}
          <a href="https://www.vote.org/register-to-vote/" targt="_blank">
            here
          </a>{' '}
          and return here when you're registered.
        </div>
      )}

      <RadioButtons
        label="Will you vote in person or by mail?"
        name="howVote"
        formRef={register}
        value1="In-Person"
        value2="Mail"
      />
      {values.howVote === 'In-Person' && (
        <>
          <RadioButtons
            label="Will I vote in-person on election day, or early?"
            name="earlyOrElectionDay"
            formRef={register}
            value1="Election Day"
            value2="Early"
          />
          {values.earlyOrElectionDay === 'Early' && (
            <>
              <YesNoButtons
                label="Does my state allow Early Voting?"
                name="allowEarlyVoting"
                formRef={register}
              />
              {values.allowEarlyVoting === 'No' && (
                <div>
                  Sorry, you should either vote on Election Day or Via Mail.
                </div>
              )}
            </>
          )}
          {(values.earlyOrElectionDay === 'Election Day' ||
            (values.earlyOrElectionDay === 'Early' &&
              values.allowEarlyVoting === 'Yes')) && (
            <>
              <YesNoButtons
                label="Will my polling place be open this election?"
                name="pollingPlaceOpen"
                formRef={register}
              />
              Check{' '}
              <a
                href="https://www.vote.org/polling-place-locator/"
                target="_blank"
              >
                here
              </a>
              <TextInputField
                name="pollingPlaceLocation"
                label="Where is my polling place (address)?"
                formRef={register}
              />
              <TextInputField
                name="time"
                label="What time will I go?"
                formRef={register}
              />
              <TextInputField
                name="transportation"
                label="How will I get there?"
                formRef={register}
              />
              <YesNoButtons
                label="Do I need to bring ID?"
                name="id"
                formRef={register}
              />
              {values.id === 'Yes' && (
                <TextInputField
                  name="idToBring"
                  label="What ID will I bring?"
                  formRef={register}
                />
              )}
            </>
          )}
        </>
      )}
      {values.howVote === 'Mail' && (
        <div>
          <YesNoButtons
            label="Does my state require a reason?"
            name="requireReason"
            formRef={register}
          />{' '}
          Check{' '}
          <a href="https://www.vote.org/absentee-voting-rules" target="_blank">
            here
          </a>
          {values.requireReason === 'Yes' && (
            <TextInputField
              name="reasonForMail"
              label="What is my reason?"
              formRef={register}
            />
          )}
          <YesNoButtons
            label="Do I need to bring ID?"
            name="id_mail"
            formRef={register}
          />
          {values.id_mail === 'Yes' && (
            <TextInputField
              name="idToBring_mail"
              label="What ID will I use?"
              formRef={register}
            />
          )}{' '}
          <YesNoButtons
            label="Have I registered for my mail ballot?"
            name="registeredMail"
            formRef={register}
          />
          {values.registeredMail === 'Yes' && (
            <div>Please confirm your request has been received</div>
          )}
          {values.registeredMail === 'No' && (
            <div>
              Register for your mail ballot here:
              https://www.vote.org/absentee-ballot/ OR widget. “Next” button for
              when they’re done
            </div>
          )}
          <RadioButtons
            label="How will I return my ballot?"
            name="returnBallot"
            formRef={register}
            value1="Via Mail"
            value2="In-Person"
          />
          {values.returnBallot === 'Via Mail' && (
            <>
              <TextInputField
                name="mailAddress"
                label="The address I need to mail this to is:"
                formRef={register}
              />
              <div>
                Please check{' '}
                <a
                  href="https://www.usvotefoundation.org/vote/eoddomestic.htm"
                  targt="_blank"
                >
                  here
                </a>
                for address.
              </div>{' '}
              <TextInputField
                name="phoneNumber"
                label="Their phone number is"
                formRef={register}
              />
              {/* TODO make this a date */}
              <TextInputField
                name="mailDeadline"
                label="I need to mail it by (https://www.vote.org/absentee-ballot-deadlines/):"
                formRef={register}
              />
              <RadioButtons
                label="I will mail it in"
                name="mailBy"
                formRef={register}
                value1="My mailbox"
                value2="A postbox"
              />
              {values.mailBy === 'A postbox' && (
                <TextInputField
                  name="postboxLocation"
                  label="Located at"
                  formRef={register}
                />
              )}
            </>
          )}
          {values.returnBallot === 'In-Person' && (
            <>
              <TextInputField
                name="dropOffLocation"
                label="What is my drop off location?"
                formRef={register}
              />
              <div>
                Please check{' '}
                <a
                  href="https://www.usvotefoundation.org/vote/eoddomestic.htm"
                  targt="_blank"
                >
                  here
                </a>
                .
              </div>
              <TextInputField
                name="phoneNumber_dropOff"
                label="Their phone number is:"
                formRef={register}
              />{' '}
              <TextInputField
                name="dayTime"
                label="I will go at (day and time) - check whether it needs to be during business hours."
                formRef={register}
              />
            </>
          )}
          <TextInputField
            name="checkVoteCounted"
            label="How will I check my vote has been counted? (Google 'check my absentee ballot status in X state)"
            formRef={register}
          />
          <div>
            Display table with all information, add voter protection hotline
            833-336-8683 AND a field for “who to call if ballot is not updated
            in time? And populate with the phone numbers generated above Who
            will I call if it is not updated in time? (same as 2.g.i.2 and
            2.g.ii,2)
          </div>
        </div>
      )}
      <div class="buttons">
        <button onClick={() => window.print()} class="button is-success">
          Done! Print to PDF
        </button>
      </div>
    </form>
  );
};

export default Checklist;
