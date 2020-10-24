import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import yup from './config/yup'

// NOTE: currently Color type and colors ts should be syncronized manually
type Color = 'black' | 'blue' | 'green' | 'red'

export type TSampleForm = {
	name: string
	age: number
	slug: string
	color: Color
}

export const useSampleForm = () => {
	// not all required
	const defaultValues = {
		name: 'prename',
		color: 'black' as Color,
	}

	// POINT
	// string

	// number
	// required -> typeError
	const schema = yup.object().shape({
		name: yup.string().required('name is required').max(30),
		age: yup.number().typeError('age is required'),
		slug: yup
			.string()
			.matches(/^[a-zA-Z0-9-\\_]+$/, {
				excludeEmptyString: true,
				message: `Only a~zA~Z0~9-_ available`,
			})
			.notOneOf(['fuck', 'fool', 'damn'], 'An inappropriate slug')
			.required(),
		color: yup.mixed().required(),
	})

	const sampleForm = useForm<TSampleForm>({
		mode: 'onBlur',
		defaultValues,
		resolver: yupResolver(schema),
	})

	return { sampleForm }
}
