import React, {useState} from 'react';

function App(){
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const file = new FormData();

		file.append('File', selectedFile);
    console.log(file)

		fetch(
			'https://dralkapi.herokuapp.com/upload',
			{
				method: 'POST',
				body: file,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return(
   <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}
export default App;






// import axios from 'axios';

// import React,{Component} from 'react';

// class App extends Component {

// 	state = {

// 	// Initially, no file is selected
// 	selectedFile: null
// 	};
	
// 	// On file select (from the pop up)
// 	onFileChange = event => {
	
// 	// Update the state
// 	this.setState({ selectedFile: event.target.files[0] });
	
// 	};
	
// 	// On file upload (click the upload button)
// 	onFileUpload = () => {
	
// 	// Create an object of formData
// 	const formData = new FormData();
	
// 	// Update the formData object
// 	formData.append(
// 		"myFile",
// 		this.state.selectedFile,
// 		this.state.selectedFile.name
// 	);
	
// 	// Details of the uploaded file
// 	console.log(this.state.selectedFile);
	
// 	// Request made to the backend api
// 	// Send formData object
// 	axios.post("https://dralkapi.herokuapp.com/upload", formData);
// 	};
	
// 	// File content to be displayed after
// 	// file upload is complete
// 	fileData = () => {
	
// 	if (this.state.selectedFile) {
		
// 		return (
// 		<div>
// 			<h2>File Details:</h2>
			
// <p>File Name: {this.state.selectedFile.name}</p>

			
// <p>File Type: {this.state.selectedFile.type}</p>

			
// <p>
// 			Last Modified:{" "}
// 			{this.state.selectedFile.lastModifiedDate.toDateString()}
// 			</p>

// 		</div>
// 		);
// 	} else {
// 		return (
// 		<div>
// 			<br />
// 			<h4>Choose before Pressing the Upload button</h4>
// 		</div>
// 		);
// 	}
// 	};
	
// 	render() {
	
// 	return (
// 		<div>
// 			<h1>
// 			GeeksforGeeks
// 			</h1>
// 			<h3>
// 			File Upload using React!
// 			</h3>
// 			<div>
// 				<input type="file" onChange={this.onFileChange} />
// 				<button onClick={this.onFileUpload}>
// 				Upload!
// 				</button>
// 			</div>
// 		{this.fileData()}
// 		</div>
// 	);
// 	}
// }

// export default App;
