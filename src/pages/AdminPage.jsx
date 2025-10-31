import React, { useState, useEffect } from "react"
import { Button, Table, Modal, Form, Alert, Badge, Card } from "react-bootstrap"
import { Tooltip } from "react-tooltip"

function AdminPage() {
  // Sample recipe data
  const [rows, setRows] = useState([])

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" })
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCuisine, setFilterCuisine] = useState("")
  const [filterDifficulty, setFilterDifficulty] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [modalMode, setModalMode] = useState("add") // "add", "edit", "view"
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("success")
  const itemsPerPage = 10

  // Form state for adding/editing recipes
  const [formData, setFormData] = useState({
    name: "",
    prepTimeMinutes: "",
    cookTimeMinutes: "",
    servings: "",
    difficulty: "Easy",
    cuisine: "",
    rating: "",
    ingredients: "",
    instructions: "",
    image: "",
    tags: "",
  })

  // Filter and search functionality
  const filteredRows = rows.filter((row) => {
    const matchesSearch =
      row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    const matchesCuisine = filterCuisine === "" || row.cuisine === filterCuisine
    const matchesDifficulty =
      filterDifficulty === "" || row.difficulty === filterDifficulty

    return matchesSearch && matchesCuisine && matchesDifficulty
  })

  // Sort functionality
  const sortedRows = [...filteredRows].sort((a, b) => {
    if (!sortConfig.key) return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (typeof aValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    }

    return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue
  })

  // Calculate total pages
  const totalPages = Math.ceil(sortedRows.length / itemsPerPage)

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = sortedRows.slice(indexOfFirstItem, indexOfLastItem)

  // Reset to first page when filters change

  useEffect(() => {
    let localStatus = localStorage.getItem("recipeData")
    if (!localStatus) {
      fetch("https://dummyjson.com/recipes")
        .then((result) => result.json())
        .then((json) => {
          setRows(json.recipes)
          localStorage.setItem("recipeData", JSON.stringify(json.recipes))
        })
    } else {
      setRows(JSON.parse(localStatus))
    }
  }, [searchTerm, filterCuisine, filterDifficulty])

  // Show alert helper
  const showAlertMessage = (message, type = "success") => {
    setAlertMessage(message)
    setAlertType(type)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  // Search handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm)
  }

  // Modal handlers
  const handleShowModal = (mode, recipe = null) => {
    setModalMode(mode)
    setSelectedRecipe(recipe)
    if (mode === "add") {
      setFormData({
        name: "",
        prepTimeMinutes: "",
        cookTimeMinutes: "",
        servings: "",
        difficulty: "Easy",
        cuisine: "",
        rating: "",
        ingredients: "",
        instructions: "",
        image: "",
        tags: "",
      })
    } else if (mode === "edit" && recipe) {
      setFormData({
        name: recipe.name,
        prepTimeMinutes: recipe.prepTimeMinutes,
        cookTimeMinutes: recipe.cookTimeMinutes,
        servings: recipe.servings,
        difficulty: recipe.difficulty,
        cuisine: recipe.cuisine,
        rating: recipe.rating,
        ingredients: recipe.ingredients.join(", "),
        instructions: recipe.instructions,
        image: recipe.image,
        tags: recipe.tags.join(", "),
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedRecipe(null)
  }

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newRecipe = {
      id: modalMode === "add" ? Date.now() : selectedRecipe.id,
      name: formData.name,
      prepTimeMinutes: parseInt(formData.prepTimeMinutes),
      cookTimeMinutes: parseInt(formData.cookTimeMinutes),
      servings: parseInt(formData.servings),
      difficulty: formData.difficulty,
      cuisine: formData.cuisine,
      rating: parseFloat(formData.rating),
      ingredients: formData.ingredients.split(",").map((item) => item.trim()),
      instructions: formData.instructions,
      image: formData.image,
      tags: formData.tags.split(",").map((item) => item.trim()),
    }

    if (modalMode === "add") {
      setRows((prev) => [...prev, newRecipe])
      showAlertMessage("Recipe added successfully!")
    } else if (modalMode === "edit") {
      setRows((prev) =>
        prev.map((row) => (row.id === selectedRecipe.id ? newRecipe : row))
      )
      showAlertMessage("Recipe updated successfully!")
    }

    handleCloseModal()
  }

  const handleSort = (key) => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const detailHandler = (id) => {
    const recipe = rows.find((row) => row.id === id)
    handleShowModal("view", recipe)
  }

  const editHandler = (id) => {
    const recipe = rows.find((row) => row.id === id)
    handleShowModal("edit", recipe)
  }

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRows((prev) => prev.filter((row) => row.id !== id))
      showAlertMessage("Recipe deleted successfully!", "warning")
    }
  }

  // Get unique values for filter dropdowns
  const uniqueCuisines = [...new Set(rows.map((row) => row.cuisine))].filter(
    Boolean
  )
  const uniqueDifficulties = [
    ...new Set(rows.map((row) => row.difficulty)),
  ].filter(Boolean)

  // Render pagination
  const renderPagination = () => {
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      )
    }
    return (
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pages}
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    )
  }

  return (
    <div style={{ marginTop: "15px" }}>
      {/* Alert */}
      {showAlert && (
        <Alert variant={alertType} className="mb-3">
          {alertMessage}
        </Alert>
      )}

      <h2 style={{ marginBottom: "20px" }}>
        Recipe List with CRUD and other functionalities __{" "}
        {new Date().toLocaleDateString()}
      </h2>

      {/* Controls Row */}
      <div className="row mb-4">
        <div className="col-md-4">
          <Form.Control
            type="text"
            placeholder="Search recipes, cuisine, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <Form.Select
            value={filterCuisine}
            onChange={(e) => setFilterCuisine(e.target.value)}
          >
            <option value="">All Cuisines</option>
            {uniqueCuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-2">
          <Form.Select
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="">All Difficulties</option>
            {uniqueDifficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="col-md-4 text-end">
          <Button variant="success" onClick={() => handleShowModal("add")}>
            <i className="bi bi-plus-circle me-2"></i>
            Add New Recipe
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-md-3">
          <Card className="text-center">
            <Card.Body>
              <h5>{rows.length}</h5>
              <small className="text-muted">Total Recipes</small>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center">
            <Card.Body>
              <h5>{uniqueCuisines.length}</h5>
              <small className="text-muted">Cuisines</small>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center">
            <Card.Body>
              <h5>
                {(
                  rows.reduce((sum, recipe) => sum + recipe.rating, 0) /
                  rows.length
                ).toFixed(1)}
              </h5>
              <small className="text-muted">Avg Rating</small>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3">
          <Card className="text-center">
            <Card.Body>
              <h5>{filteredRows.length}</h5>
              <small className="text-muted">Filtered Results</small>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* Recipe Table */}
      <div className="table-responsive">
        <Table
          className="table table-striped table-hover"
          style={{ width: "100%" }}
        >
          <thead className="table-dark">
            <tr>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("id")}
                >
                  ID{" "}
                  {sortConfig.key === "id"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th style={{ minWidth: "200px" }}>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("name")}
                >
                  Recipe Name{" "}
                  {sortConfig.key === "name"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("prepTimeMinutes")}
                >
                  Prep Time{" "}
                  {sortConfig.key === "prepTimeMinutes"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("cookTimeMinutes")}
                >
                  Cook Time{" "}
                  {sortConfig.key === "cookTimeMinutes"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("servings")}
                >
                  Servings{" "}
                  {sortConfig.key === "servings"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("difficulty")}
                >
                  Difficulty{" "}
                  {sortConfig.key === "difficulty"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("cuisine")}
                >
                  Cuisine{" "}
                  {sortConfig.key === "cuisine"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>
                <Button
                  variant="link"
                  className="text-white p-0"
                  onClick={() => handleSort("rating")}
                >
                  Rating{" "}
                  {sortConfig.key === "rating"
                    ? sortConfig.direction === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </Button>
              </th>
              <th>Tags</th>
              <th style={{ minWidth: "200px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="10" className="text-center py-4">
                  <i className="bi bi-inbox fs-1 text-muted d-block mb-2"></i>
                  No recipes found matching your criteria
                </td>
              </tr>
            ) : (
              currentItems.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <div className="fw-bold">{row.name}</div>
                    <small className="text-muted">
                      Total: {row.prepTimeMinutes + row.cookTimeMinutes} min
                    </small>
                  </td>
                  <td>{row.prepTimeMinutes} min</td>
                  <td>{row.cookTimeMinutes} min</td>
                  <td>{row.servings}</td>
                  <td>
                    <Badge
                      bg={
                        row.difficulty === "Easy"
                          ? "success"
                          : row.difficulty === "Medium"
                          ? "warning"
                          : "danger"
                      }
                    >
                      {row.difficulty}
                    </Badge>
                  </td>
                  <td>{row.cuisine}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-1">⭐</span>
                      <span>{row.rating}</span>
                    </div>
                  </td>
                  <td>
                    <div>
                      {row.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} bg="secondary" className="me-1 mb-1">
                          {tag}
                        </Badge>
                      ))}
                      {row.tags.length > 2 && (
                        <Badge bg="light" text="dark">
                          +{row.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="btn-group" role="group">
                      <Button
                        size="sm"
                        variant="outline-info"
                        onClick={() => detailHandler(row.id)}
                        data-tooltip-id="viewTooltip"
                      >
                        <i className="bi bi-eye"></i>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-primary"
                        onClick={() => editHandler(row.id)}
                        data-tooltip-id="editTooltip"
                      >
                        <i className="bi bi-pencil"></i>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline-danger"
                        onClick={() => deleteHandler(row.id)}
                        data-tooltip-id="deleteTooltip"
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </div>
                    <Tooltip
                      id="viewTooltip"
                      content="View details"
                      place="top"
                    />
                    <Tooltip
                      id="editTooltip"
                      content="Edit recipe"
                      place="top"
                    />
                    <Tooltip
                      id="deleteTooltip"
                      content="Delete recipe"
                      place="top"
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, sortedRows.length)} of{" "}
            {sortedRows.length} entries
          </div>
          <nav>
            <ul className="pagination mb-0">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Recipe Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {modalMode === "add" && "Add New Recipe"}
            {modalMode === "edit" && "Edit Recipe"}
            {modalMode === "view" && "Recipe Details"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalMode === "view" && selectedRecipe ? (
            <div>
              <div className="row">
                <div className="col-md-6">
                  <h5>{selectedRecipe.name}</h5>
                  <p>
                    <strong>Cuisine:</strong> {selectedRecipe.cuisine}
                  </p>
                  <p>
                    <strong>Difficulty:</strong>
                    <Badge
                      bg={
                        selectedRecipe.difficulty === "Easy"
                          ? "success"
                          : selectedRecipe.difficulty === "Medium"
                          ? "warning"
                          : "danger"
                      }
                      className="ms-2"
                    >
                      {selectedRecipe.difficulty}
                    </Badge>
                  </p>
                  <p>
                    <strong>Rating:</strong> ⭐ {selectedRecipe.rating}
                  </p>
                  <p>
                    <strong>Prep Time:</strong> {selectedRecipe.prepTimeMinutes}{" "}
                    minutes
                  </p>
                  <p>
                    <strong>Cook Time:</strong> {selectedRecipe.cookTimeMinutes}{" "}
                    minutes
                  </p>
                  <p>
                    <strong>Servings:</strong> {selectedRecipe.servings}
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    <strong>Tags:</strong>
                  </p>
                  <div className="mb-3">
                    {selectedRecipe.tags.map((tag) => (
                      <Badge key={tag} bg="secondary" className="me-1 mb-1">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {selectedRecipe.image && (
                    <img
                      src={selectedRecipe.image}
                      alt={selectedRecipe.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px" }}
                    />
                  )}
                </div>
              </div>
              <div className="mt-3">
                <h6>Ingredients:</h6>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <h6>Instructions:</h6>
                <p>{selectedRecipe.instructions}</p>
              </div>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Recipe Name *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cuisine *</Form.Label>
                    <Form.Control
                      type="text"
                      name="cuisine"
                      value={formData.cuisine}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select
                      name="difficulty"
                      value={formData.difficulty}
                      onChange={handleInputChange}
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Rating (1-5)</Form.Label>
                    <Form.Control
                      type="number"
                      name="rating"
                      min="1"
                      max="5"
                      step="0.1"
                      value={formData.rating}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Prep Time (minutes) *</Form.Label>
                    <Form.Control
                      type="number"
                      name="prepTimeMinutes"
                      value={formData.prepTimeMinutes}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cook Time (minutes) *</Form.Label>
                    <Form.Control
                      type="number"
                      name="cookTimeMinutes"
                      value={formData.cookTimeMinutes}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Servings *</Form.Label>
                    <Form.Control
                      type="number"
                      name="servings"
                      value={formData.servings}
                      onChange={handleInputChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="mb-3">
                <Form.Label>Ingredients (comma-separated) *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleInputChange}
                  placeholder="flour, butter, sugar, eggs..."
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Instructions *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Tags (comma-separated)</Form.Label>
                <Form.Control
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="dessert, baking, family-friendly..."
                />
              </Form.Group>

              <div className="d-flex justify-content-end gap-2">
                <Button variant="secondary" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  {modalMode === "add" ? "Add Recipe" : "Update Recipe"}
                </Button>
              </div>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default AdminPage
