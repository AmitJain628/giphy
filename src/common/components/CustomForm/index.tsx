import { useEffect, useRef, useState } from 'react';

interface IProps {
    // tslint:disable-next-line:no-any
    initialValues: any;
    // tslint:disable-next-line:no-any
    onSubmit(val: any): void;
}

const useCustomForm = ({ initialValues, onSubmit }: IProps) => {
    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [onSubmitting, setOnSubmitting] = useState<boolean>(false);
    const [onBlur, setOnBlur] = useState<boolean>(false);
    const formRendered = useRef(true);

    useEffect(() => {
        if (formRendered.current) {
          setValues(initialValues);
          setErrors({});
          setTouched({});
          setOnSubmitting(false);
          setOnBlur(false);
        }
        formRendered.current = false;
      }, [initialValues]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
    };

    const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name } = target;
        setTouched({ ...touched, [name]: true });
        setErrors({ ...errors });
      };

    // tslint:disable-next-line:no-any
    const handleSubmit = (event: any) => {
        if (event) {
          event.preventDefault();
        }
        setErrors({ ...errors });
        onSubmit({ values, errors });
    };

    return {
        values,
        errors,
        touched,
        onSubmitting,
        onBlur,
        handleChange,
        handleBlur,
        handleSubmit
      };
};

export default useCustomForm;
