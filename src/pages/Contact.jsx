const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
      if (errors[name]) {
        setErrors(prev => ({
          ...prev,
          [name]: ''
        }));
      }
    };
  
    const handleBlur = (e) => {
      const { name, value } = e.target;
      
      if (!value.trim()) {
        setErrors(prev => ({
          ...prev,
          [name]: 'This field is required'
        }));
      } else if (name === 'email' && !validateEmail(value)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let hasErrors = false;
      const newErrors = {};
  
      // Validate all fields
      Object.keys(formData).forEach(key => {
        if (!formData[key].trim()) {
          newErrors[key] = 'This field is required';
          hasErrors = true;
        }
      });
  
      if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
        hasErrors = true;
      }
  
      if (hasErrors) {
        setErrors(newErrors);
        return;
      }
  
      // Here you would typically send the form data to a server
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    };
  
    return (
      <section className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 font-heading">
          Contact Me
        </h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
            Thank you for your message! I'll get back to you soon.
          </div>
        )}
  
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
  
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
  
          <div>
            <label 
              htmlFor="message" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-2 rounded-lg border ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Send Message
          </button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  