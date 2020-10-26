import * as yup from 'yup'

declare module 'yup' {
	// interface StringSchema {
	// 	sampleTest(): StringSchema
	// }
}

// NOTE: custom your default message
yup.setLocale({
	mixed: {
		required: 'required',
	},
})

// NOTE: add Method only with "test"
// yup.addMethod(yup.string, 'sampleTest', () => {
// 	return yup.string().test('sampleTest', 'error message', async (value) => {
// 		if (!value) return true

// 		return firestore
// 			.collection('users')
// 			.where('hoge', '==', value)
// 			.limit(1)
// 			.get()
// 			.then((snap) => {
// 				return snap.empty
// 			})
// 	})
// })

export default yup
