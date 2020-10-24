import React from 'react'
import { UseFormMethods } from 'react-hook-form'

import { TSampleForm } from './useSampleForm'

import { colors } from './config/colors'

interface SampleFormProps {
	sampleForm: UseFormMethods<TSampleForm>
}

export const SampleForm = ({ sampleForm }: SampleFormProps) => {
	const {
		errors,
		formState: { isSubmitting, isValid },
		handleSubmit,
		register,
	} = sampleForm
	const onSubmit = (data: any) => {
		console.log(data)
	}
	const onError = (error: any) => console.log(error)

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onSubmit, onError)}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<div>
						<input
							name="name"
							className="form-control"
							id="name"
							ref={register}
						/>
						{errors.name && (
							<p className="text-danger">{errors.name.message}</p>
						)}
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="age">Age</label>
					<div>
						<input
							type="number"
							name="age"
							className="form-control"
							id="age"
							ref={register}
						/>
						{errors.age && <p className="text-danger">{errors.age.message}</p>}
					</div>
				</div>
				<div className="form-group">
					<label>Slug</label>
					<div>
						<input name="slug" className="form-control" ref={register} />
						{errors.slug && (
							<p className="text-danger">{errors.slug.message}</p>
						)}
					</div>
				</div>
				<div className="form-group">
					<label>Color</label>
					<div>
						{colors.map((color) => (
							<div className="form-check">
								<input
									id={color}
									type="radio"
									name="color"
									value={color}
									className="form-check-input"
									ref={register}
								/>
								<label className="form-check-label" htmlFor={color}>
									{color}
								</label>
							</div>
						))}
					</div>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					disabled={isSubmitting || !isValid}
				>
					{isSubmitting ? `Submit` : `Submitting`}
				</button>
			</form>
		</div>
	)
}
